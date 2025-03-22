<script lang="ts">
  let src: HTMLTextAreaElement | undefined = $state();

  export const focus = () => {
    src!.focus();
  };
</script>

<textarea bind:this={src}></textarea>
