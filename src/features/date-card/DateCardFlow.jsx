import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { cuisines, restaurants, timeSlots } from '../../data/dateCardData';
import { copyToClipboard } from '../../lib/copyToClipboard';
import { formatSummary } from '../../lib/formatSummary';
import { buildDateCardSummary } from './dateCardSummary';
import { InvitationStep } from './components/InvitationStep';
import { SelectionStep } from './components/SelectionStep';
import { SuccessStep } from './components/SuccessStep';

const steps = {
  invitation: 'invitation',
  cuisine: 'cuisine',
  restaurant: 'restaurant',
  time: 'time',
  success: 'success',
};

export function DateCardFlow() {
  const [step, setStep] = useState(steps.invitation);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [copied, setCopied] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState(null);
  const noButtonRef = useRef(null);

  const filteredRestaurants = useMemo(
    () => restaurants.filter((restaurant) => restaurant.cuisineId === selectedCuisine?.id),
    [selectedCuisine],
  );

  const summary = useMemo(
    () => buildDateCardSummary({
      cuisine: selectedCuisine,
      restaurant: selectedRestaurant,
      time: selectedTime,
    }),
    [selectedCuisine, selectedRestaurant, selectedTime],
  );

  const summaryText = useMemo(() => formatSummary(summary), [summary]);

  useEffect(() => {
    if (step !== steps.invitation) {
      setNoButtonPosition(null);
    }
  }, [step]);

  const handleNoHover = () => {
    const button = noButtonRef.current;
    if (!button || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const bounds = button.getBoundingClientRect();
    const width = bounds.width || 120;
    const height = bounds.height || 44;
    const margin = 12;

    const currentX = noButtonPosition?.x ?? bounds.left;
    const currentY = noButtonPosition?.y ?? bounds.top;
    const offsetX = (Math.random() * 20) - 10;
    const offsetY = (Math.random() * 20) - 10;
    const nextX = Math.min(Math.max(currentX + offsetX, margin), window.innerWidth - width - margin);
    const nextY = Math.min(Math.max(currentY + offsetY, margin), window.innerHeight - height - margin);

    setNoButtonPosition({ x: nextX, y: nextY });
  };

  const handleAccept = () => setStep(steps.cuisine);

  const handleCuisineSelect = (cuisine) => {
    setSelectedCuisine(cuisine);
    setSelectedRestaurant(null);
    setSelectedTime(null);
    setStep(steps.restaurant);
  };

  const handleRestaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setSelectedTime(null);
    setStep(steps.time);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(steps.success);
  };

  const handleCopy = async () => {
    await copyToClipboard(summaryText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const stepTitle =
    step === steps.invitation
      ? 'Sinh nhật của em'
      : step === steps.cuisine
        ? 'Chọn món tối nay'
        : step === steps.restaurant
          ? 'Chọn quán thôi nào'
          : step === steps.time
            ? 'Chọn giờ đi date'
            : 'Mọi thứ đã sẵn sàng';

  const backButtonLabel = step === steps.success ? 'Quay lại chọn giờ' : 'Quay lại chọn món';
  const handleBackButtonClick = () => {
    setStep(step === steps.success ? steps.time : steps.cuisine);
  };

  return (
    <main className="min-h-screen bg-pink-radial px-4 py-8 text-blush-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col justify-center gap-6">

        <Card className="relative overflow-hidden p-4 sm:p-6 lg:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(255,63,127,0.16),transparent_22%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.65),transparent_22%)]" />

          {step === steps.invitation ? (
            <div className="relative mx-auto flex min-h-[min(72vh,44rem)] max-w-3xl items-center justify-center">
              <motion.div
                key="invitation"
                className="w-full"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.28 }}
              >
                <InvitationStep
                  onAccept={handleAccept}
                  noButtonRef={noButtonRef}
                  noButtonPosition={noButtonPosition}
                  onNoHover={handleNoHover}
                />
              </motion.div>
            </div>
          ) : (
            <div className="relative grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.65fr)]">
              <div className="space-y-4 lg:pr-2">
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-blush-500">
                  {step.toUpperCase()}
                </p>
                <h1 className="max-w-md text-3xl font-black leading-tight text-blush-950 sm:text-4xl">
                  {stepTitle}
                </h1>
                <div className="flex flex-wrap gap-3 pt-2">
                  {selectedCuisine ? (
                    <Button variant="secondary" type="button" onClick={handleBackButtonClick}>
                      {backButtonLabel}
                    </Button>
                  ) : null}
                  <Button variant="ghost" type="button" onClick={() => setStep(steps.invitation)}>
                    Về màn đầu
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full max-w-3xl">
                  <AnimatePresence mode="wait">
                    {step === steps.cuisine ? (
                      <motion.div
                        key="cuisine"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.25 }}
                      >
                        <SelectionStep
                          title="Ẩm thực muốn lựa chọn"
                          subtitle="Step 1"
                          items={cuisines.map((item) => ({ ...item, summary: 'Chọn món hợp mood tối nay.' }))}
                          selectedId={selectedCuisine?.id}
                          onSelect={handleCuisineSelect}
                        />
                      </motion.div>
                    ) : null}

                    {step === steps.restaurant ? (
                      <motion.div
                        key="restaurant"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.25 }}
                      >
                        <SelectionStep
                          title="Chọn quán thôi nào"
                          subtitle={selectedCuisine?.label ?? 'Step 2'}
                          items={filteredRestaurants}
                          selectedId={selectedRestaurant?.id}
                          onSelect={handleRestaurantSelect}
                          type="restaurant"
                        />
                      </motion.div>
                    ) : null}

                    {step === steps.time ? (
                      <motion.div
                        key="time"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.25 }}
                      >
                        <Card className="p-5 sm:p-6">
                          <div className="mb-5 space-y-2">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blush-500">
                              Step 3
                            </p>
                            <h2 className="text-2xl font-black text-blush-900 sm:text-3xl">
                              Chọn giờ đi date
                            </h2>
                            <p className="text-sm leading-6 text-blush-800/80">
                              Bàn ăn tối đã đặt sẵn lúc 19h30, nên mình chọn một khung trước đó để đi chơi cho trọn buổi.
                            </p>
                          </div>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {timeSlots.map((time) => {
                              const selected = selectedTime?.value === time.value;
                              return (
                                <Button
                                  key={time.value}
                                  type="button"
                                  variant={selected ? 'primary' : 'secondary'}
                                  onClick={() => handleTimeSelect(time)}
                                  className="flex h-auto flex-col items-start gap-1 rounded-[1.5rem] px-4 py-4 text-left"
                                >
                                  <span className="text-base font-black">{time.label}</span>
                                  <span className="text-left text-xs font-medium leading-5 opacity-90">
                                    {time.description}
                                  </span>
                                </Button>
                              );
                            })}
                          </div>
                        </Card>
                      </motion.div>
                    ) : null}

                    {step === steps.success ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.25 }}
                      >
                        <SuccessStep
                          summaryText={summaryText}
                          copied={copied}
                          onCopy={handleCopy}
                        />
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </main>
  );
}
