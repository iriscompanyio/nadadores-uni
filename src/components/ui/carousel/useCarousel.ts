import { createInjectionState } from "@vueuse/core";
import emblaCarouselVue from "embla-carousel-vue";
import { onMounted, ref } from "vue";
import type {
  UnwrapRefCarouselApi as CarouselApi,
  CarouselEmits,
  CarouselProps,
} from "./interface";

const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({ opts, orientation, plugins }: CarouselProps, emits: CarouselEmits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );

    const selectedSlideIndex = ref<number>(0);

    function scrollPrev() {
      emblaApi.value?.scrollPrev();
    }
    function scrollNext() {
      emblaApi.value?.scrollNext();
    }
    function scrollTo(idx: number) {
      emblaApi.value?.scrollTo(idx);
    }
    function selectedScrollSnap() {
      return emblaApi.value?.selectedScrollSnap() || 0;
    }

    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);

    function onSelect(api: CarouselApi) {
      canScrollNext.value = api?.canScrollNext() || false;
      canScrollPrev.value = api?.canScrollPrev() || false;
      selectedSlideIndex.value = api?.selectedScrollSnap() || 0;
    }

    onMounted(() => {
      if (!emblaApi.value) return;

      emblaApi.value?.on("init", onSelect);
      emblaApi.value?.on("reInit", onSelect);
      emblaApi.value?.on("select", onSelect);

      emits("init-api", emblaApi.value);
    });

    return {
      carouselRef: emblaNode,
      carouselApi: emblaApi,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
      orientation,
      scrollTo,
      selectedScrollSnap,
      selectedSlideIndex,
    };
  },
);

function useCarousel() {
  const carouselState = useInjectCarousel();

  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");

  return carouselState;
}

export { useCarousel, useProvideCarousel };
