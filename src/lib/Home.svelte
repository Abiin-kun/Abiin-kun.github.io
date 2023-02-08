<script lang="ts">
import {currentPage} from "../store";
</script>

<div class="Header">
    <h1 style="text-align: center">Hello! Welcome to my Corner of the WEB 🔥</h1>
    <p style="text-align: center"></p>


<p style="text-align: center">I am a 14 year old developer from India</p>
    <p style="text-align: center">I am currently learning Data Science</p>
    <p style="text-align: center">Checkout</p>
    <div style="text-align: center">
        <button on:click={() => $currentPage = "WIP"}>Some Blogs Written by me</button>
        <button on:click={() => $currentPage = "WIP"}>My Projects</button>
    </div>

</div>

