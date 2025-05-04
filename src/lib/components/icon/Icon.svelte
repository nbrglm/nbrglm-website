<script lang="ts">
  import * as icons from "lucide-svelte";
  import type { IconProps } from "lucide-svelte";
  import type { Component } from "svelte";
  import type { IconName } from ".";

  let { name, ...others }: { name: IconName } & IconProps = $props();

  let Icon = icons[name] as unknown as Component;
</script>

<Icon {...others} />
