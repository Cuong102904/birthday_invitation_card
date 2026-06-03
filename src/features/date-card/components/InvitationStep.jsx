import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../../../components/ui/button';
import { Card } from '../../../components/ui/card';
import meoCamHoaImage from '../../../assets/images/meo-cam-hoa.jpg';

export function InvitationStep({ onAccept, noButtonRef, noButtonPosition, onNoHover }) {
  return (
    <Card className="relative overflow-hidden p-8 sm:p-12 lg:p-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,99,132,0.18),transparent_34%)]" />
      <div className="relative flex min-h-[22rem] flex-col items-center justify-center gap-8 text-center sm:min-h-[26rem]">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/70 shadow-glow shadow-blush-500/20">
          <img
            src={meoCamHoaImage}
            alt="Mèo cam tặng hoa"
            className="h-40 w-40 object-cover sm:h-48 sm:w-48 lg:h-56 lg:w-56"
            loading="eager"
          />
        </div>
        <h1 className="max-w-xl text-3xl font-black leading-tight text-blush-900 sm:text-4xl">
          Liệu eiu có mún cùng aiu đón sinh nhật thiệc là đáng nhớ hum :3
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button onClick={onAccept} className="gap-2 px-7 py-3 text-base">
            Yes <ArrowRight className="h-4 w-4" />
          </Button>
          <motion.button
            ref={noButtonRef}
            type="button"
            onMouseEnter={onNoHover}
            onMouseMove={onNoHover}
            onPointerEnter={onNoHover}
            onPointerMove={onNoHover}
            animate={{
              x: 0,
              y: 0,
            }}
            style={
              noButtonPosition
                ? {
                    position: 'fixed',
                    left: `${noButtonPosition.x}px`,
                    top: `${noButtonPosition.y}px`,
                    zIndex: 50,
                  }
                : undefined
            }
            className="rounded-full bg-white/60 px-6 py-3 text-sm font-semibold text-blush-700 ring-1 ring-white/80 backdrop-blur transition-all duration-300 hover:bg-white"
          >
            No
          </motion.button>
        </div>
      </div>
    </Card>
  );
}
