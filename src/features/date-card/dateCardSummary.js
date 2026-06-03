export function buildDateCardSummary({ cuisine, restaurant, time }) {
  return {
    cuisine: cuisine?.label ?? null,
    restaurant: restaurant?.name ?? null,
    restaurantLink: restaurant?.link ?? null,
    time: time?.label ?? time?.value ?? time ?? null,
  };
}
