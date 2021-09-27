<script lang="ts">
  import clsx from 'clsx'
  import type {Bookmark} from '../types';

  export let title: Bookmark['title'];
  export let imageUrl: Bookmark['imageUrl'];
  export let linkUrl: Bookmark['linkUrl'];
  export let tags: Bookmark['tags'];
  export let notes: Bookmark['notes'] = 'No notes';

  const titlePieces = title.split(' ');
  const onClick = () => (expanded = !expanded);

  $: expanded = false;
</script>

<style lang="scss">
article {
  display: flex;
  height: 15vw;
  margin-top: 3em;

  .notes {
    display: none;
  }
  
  .pic-frame {
    aspect-ratio: 16 / 9;
    margin-right: 2em;
    // width: 40%;
    height: 100%;
    position: relative;

    &::before, &::after {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
    }

    &::before {
      background: var(--image-url) 0 50% / cover no-repeat;
      margin-top: 0.5em;
      margin-left: 0.5em;
    }

    &:after {
      border: 1px solid black;
      box-shadow: 1px 1px 0 #fffa;
    }
  }

  h2 {
    $shadow-offset: 0.08em;
    $shadow-offset-color: $shadow-offset + 0.02em;

    font: normal clamp(1.25em, 3vw, 2em) Georgia, serif;
    letter-spacing: 0.075em;
    margin-top: 0; // .25em;
    text-transform: lowercase;
    // text-shadow: -0.02em -0.02em 0.1em black;
    // font-variant: small-caps;
    text-shadow:
      $shadow-offset $shadow-offset 0.02em white,
      $shadow-offset-color $shadow-offset-color 0.02em #f630;
    transition: text-shadow 150ms;

    &:hover {
      text-shadow:
        $shadow-offset $shadow-offset 0.02em white,
        $shadow-offset-color $shadow-offset-color 0.02em #f63f;
    }

    a {
      color: black;
      text-decoration: none;
    }

    :last-child {
      display: inline-block;
      transform: translateY(15%);
    }
  }

  &.expanded {
    .notes {
      display: block;
    }
  }

  &:first-of-type {
    margin-top: 0;
  }
}
</style>

<article style={`--image-url: url('${imageUrl}')`} class={clsx(expanded && 'expanded')} on:click={onClick}>
  <div class="pic-frame">
    <div class="pic" />
  </div>
  <div class="content">
    <h2>
      <a href={linkUrl} target="_blank" on:click|stopPropagation>
        {#each titlePieces as piece, idx}
          {#if idx + 1 !== titlePieces.length}
          {`${piece} `}
          {:else}
          <span>{piece}</span>
          {/if}
        {/each}
      </a>
    </h2>
    <div class="tags">{[...tags, ...tags, ...tags].join(', ')}</div>
    <p class="notes">{notes}</p>
  </div>
</article>