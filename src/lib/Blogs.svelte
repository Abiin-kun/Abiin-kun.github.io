<script lang="ts">
    import { currentPage } from "../store";


    function OnClick(){
        $currentPage = "Blogs_like"
    }
</script>
<button on:click={OnClick}>
    <p>Things i Like</p>
    <smalll>Languages,Programs,etc</smalll>
</button>


