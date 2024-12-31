<script>
  import Status from "./Status.svelte";
  let { title } = $props();
</script>

<div class="py-3 flex md:justify-between md:items-center">
  <a
    href="/"
    class="text-md font-light text-gray-600 hover:underline hover:text-blue-600"
  >
    {title}test
  </a>
  <Status status="In progress" />
</div>
