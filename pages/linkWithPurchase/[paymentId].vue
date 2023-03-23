<script setup>
const user = useSupabaseUser();

watchEffect(async () => {
  if (user.value) {
    const route = useRoute();
    await useFetch(`/api/user/linkWithPurchase/${route.params.paymentId}`, {
      headers: userRequestHeaders(["cookie"]),
    });

    await navigateTo("/", {
      replace: true,
    });
  }
});

const render = () => {};
</script>
