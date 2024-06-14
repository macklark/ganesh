<script>
  import MailIcon from "./components/mail-icon.svelte";
</script>

<div class="flex flex-col md:w-1/2 w-4/5 mx-auto">
  <header class="py-10">
    <h1 class="text-orange md:text-4xl text-2xl font-extrabold tracking-tight">
      Ganesh Kolavennu
    </h1>
    <h2 class="text-white md:text-lg text-xs font-bold tracking-tight pt-2">
      Web Developer . Software Engineer . Tech Enthusiast
    </h2>
  </header>
  <main>
    <section class="pb-10">
      <p class="text-grey">
        Hello there! 👋 I am a frontend developer at <a
          class="text-lite-yellow hover:underline decoration-solid"
          href="https://www.bigbasket.com/about-us/">Bigbasket</a
        >, where I collaborate with a team of professional frontend developers
        on the development of the Bigbasket web-based application.
      </p>
    </section>
    <section class="pb-10">
      <h3 class="text-white md:text-lg text-md font-bold tracking-tight">
        What was I up to before this ?
      </h3>
      <ul class="pt-5 text-grey flex flex-col gap-2 list-disc">
        <li>Machine Learning Engineer . Intern . Genpact</li>
        <li>Software Engineer . Intern . R.I.N.L, Vizag</li>
      </ul>
    </section>
    <section>
      <h3 class="text-white md:text-lg text-md font-bold tracking-tight">
        Wanna Catch up !
      </h3>
      <p class="pt-5 flex items-center gap-x-2">
        <MailIcon />
        <a
          class="text-lite-yellow hover:underline decoration-solid"
          href="mailto:ganesh.kolavennu@gmail.com">ganesh.kolavennu@gmail.com</a
        >
      </p>
    </section>
  </main>
</div>
