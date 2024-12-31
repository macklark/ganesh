<script>
  import Icon from "@iconify/svelte";
  import Blog from "./modules/blog/Blog.svelte";
</script>

<div class="flex flex-col md:w-1/3 w-4/5 mx-auto">
  <header class="pt-16">
    <div class="flex justify-center">
      <img
        src="./ganesh.svg"
        alt="Ganesh Logo"
        class="inline-block h-16 w-16 rounded-full ring-2 ring-white"
      />
    </div>
    <h1 class="text-center text-xl md:text-3xl font-bold pt-5">
      Ganesh Kolavennu
    </h1>
    <h3 class="text-center text-sm md:text-md font-medium pt-3 text-slate-600">
      Software Engineer . Tech Enthusiast
    </h3>
    <p class="text-justify text-sm md:text-md pt-5 text-slate-500">
      Hello there! 👋 I am a frontend developer at <a
        class="text-red-500 hover:underline decoration-solid"
        href="https://www.bigbasket.com/about-us/">Bigbasket</a
      >, where I collaborate with a team of professional frontend developers on
      the development of the Bigbasket web-based application.
    </p>
  </header>
  <nav class="flex justify-center pt-8 gap-x-1 items-center">
    <a
      href="https://github.com/macklark"
      class="hover:bg-slate-200 transition-all ease-in p-2 rounded-md"
    >
      <Icon icon="line-md:github-twotone" style="font-size: 26px;" />
    </a>
    <a
      href="https://www.linkedin.com/in/ganesh-kolavennu-65a809179/"
      class="hover:bg-slate-200 transition-all ease-in p-2 rounded-md"
    >
      <Icon icon="line-md:linkedin" style="font-size: 26px;" />
    </a>
    <a
      href="mailto:ganesh.kolavennu@gmail.com"
      class="hover:bg-slate-200 transition-all ease-in p-2 rounded-md"
    >
      <Icon icon="line-md:email-twotone" style="font-size: 26px;" />
    </a>
  </nav>
  <Blog />
</div>
