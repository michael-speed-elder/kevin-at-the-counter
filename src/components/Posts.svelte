<script lang="ts">
  import {bookmarks} from '../assets/dummy-data';
  import Post from './Post.svelte';
</script>

<style lang="scss">
  .posts {
    margin: auto;
    width: 67vw;
    min-width: 600px;
    max-width: 1200px;
  }
</style>

<div class="posts">
  {#each bookmarks as bookmark}
    <Post {...bookmark} />
  {/each}
</div>