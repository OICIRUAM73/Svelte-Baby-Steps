<script>
  let someText = `Frontend Developer at Listatree`;
  let count = 0;

  function handleClick() {
    count += 1;
  }

</script>

<style>
 	p {
		color: var(--theme-color);
		font-size: 22px;
	}
</style>

<div class="About">
  <p>
    {someText}
  </p>
  <button on:click={handleClick}>Click {count === 0 ? '' : count}</button>
</div>