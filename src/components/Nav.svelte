<script>
  import Hamburguer from "./Hamburguer.svelte";
  import NavLink from "./NavLink.svelte";

  export let segment;
  let expand = false;

  function toggleMobileMenu(event) {
    expand = event.detail;
  }
</script>

<nav
  class="fixed z-10 text-white w-full lg:w-1/2 flex items-center justify-between flex-wrap
  p-4 bg-black md:p-4 shadow-lg top-0 md:rounded-br-lg">

  <a href="/" class="text-2xl md:text-4xl tracking-tight mr-4 myDisplay-1">
    Hurricane Cycles
  </a>

  <div class="block lg:hidden">
    <Hamburguer on:click={toggleMobileMenu} {expand} />
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="{!expand && 'hidden'} lg:block text-sm lg:flex-grow">
      <NavLink text="About" href="about" {segment} />
      <NavLink text="Blog" href="blog" {segment} rel="prefetch" />
      <NavLink text="Join Our Newsletter" href="newsletter" {segment} />
    </div>
  </div>
</nav>
