<script setup lang="ts">
import { useProvideCarousel } from "./useCarousel";
import type {
  CarouselEmits,
  CarouselProps,
  WithClassAsProps,
} from "./interface";
import { cn } from "@/lib/utils";

const props = withDefaults(defineProps<CarouselProps & WithClassAsProps>(), {
  orientation: "horizontal",
});

const emits = defineEmits<CarouselEmits>();

const {
  canScrollNext,
  canScrollPrev,
  carouselApi,
  carouselRef,
  orientation,
  scrollNext,
  scrollPrev,
  scrollTo,
  selectedScrollSnap,
  selectedSlideIndex,
} = useProvideCarousel(props, emits);

defineExpose({
  canScrollNext,
  canScrollPrev,
  carouselApi,
  carouselRef,
  orientation,
  scrollNext,
  scrollPrev,
  scrollTo,
  selectedScrollSnap,
  selectedSlideIndex,
});

function onKeyDown(event: KeyboardEvent) {
  const prevKey = props.orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
  const nextKey = props.orientation === "vertical" ? "ArrowDown" : "ArrowRight";

  if (event.key === prevKey) {
    event.preventDefault();
    scrollPrev();

    return;
  }

  if (event.key === nextKey) {
    event.preventDefault();
    scrollNext();
  }
}
</script>

<template>
  <div
    :class="cn('relative', props.class)"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
    @keydown="onKeyDown"
  >
    <slot
      :can-scroll-next
      :can-scroll-prev
      :carousel-api
      :carousel-ref
      :orientation
      :selected-slide-index
      :scroll-next
      :scroll-prev
      :scroll-to
      :selected-scroll-snap
    />
  </div>
</template>
