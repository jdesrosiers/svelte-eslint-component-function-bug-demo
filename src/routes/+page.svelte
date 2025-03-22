<script lang="ts">
  import Foo from "../components/Foo.svelte";

  let foo: Foo | undefined = $state();

  const focus = () => {
    foo!.focus();
  }
</script>

<button onclick={() => focus()}>Focus</button>
<Foo bind:this={foo} />
