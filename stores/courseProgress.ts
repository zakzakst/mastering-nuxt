import { defineStore } from "pinia";

export const useCourseProgress = defineStore("courseProgress", () => {
  const progress = useLocalStorage("progress", {});
  const initialized = ref(false);

  async function initialize() {
    if (initialized.value) return;
    initialized.value = true;
  }

  const toggleComplete = async (chapter: string, lesson: string) => {
    const user = useSupabaseUser();
    if (!user.value) return;

    if (!chapter || !lesson) {
      const {
        params: { chapterSlug, lessonSlug },
      } = useRoute();
      chapter = chapterSlug as string;
      lesson = lessonSlug as string;
    }

    const courseProgress = progress.value[chapter]?.[lesson];
    progress.value[chapter] = {
      ...progress.value[chapter]
      [lesson]: !courseProgress,
    };
  };

  return {
    initialize,
    progress,
    toggleComplete,
  };
});
