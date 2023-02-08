<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import Home from "./lib/Home.svelte";
  import {currentPage} from "./store.js";
  import WIP from "./lib/WIP.svelte";
    import Blogs from './lib/Blogs.svelte';
    import BlogsIlike from './lib/Blogs_Ilike.svelte';
  

</script>

<main>
    <div class="navbar">
      <p class="text" >Abhinn Pandey's Personal Space</p>
      <div class="items">
        <button on:click={() => $currentPage = "Home"}>Home</button>
        <button on:click={() => $currentPage = "Blogs"}>Blogs</button>
        <button on:click={() => $currentPage = "WIP"}>Projects</button>
        <button><a href="https://www.github.com/abiin-kun/">Github</a></button>

      </div>

    </div>




    {#if $currentPage === "Home"}
      <div class="container">
      <Home />
      </div>
      {:else if $currentPage === "Blogs_like"}
      <div class="container">
        <BlogsIlike/>
      </div>
      {:else if $currentPage === "Blogs"}
      <div class="container">
        <Blogs/>
      </div>
      {:else if $currentPage === "WIP"}
      <div class="container" style="background: black; height: 100%">
      <h1 style="text-align: center" class="text">This Page is in Development but dont worry this page will come blazingly 🔥 soon</h1>
      </div>
    {/if}




</main>

<style>
  .navbar {
    position: sticky;
    width: 100%;
    height: 50px;
    background-color: black;
    display: flex;
    align-items: center;
    margin-left: auto;
    padding-left: 10px;
  }

  /*.container {*/
  /*  display: flex;*/
  /*  justify-content: center;*/
  /*  align-items: center;*/
  /*  height: calc(100vh - 100px);*/
  /*}*/
  .items {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
 .text{
  color: white;
}
</style>