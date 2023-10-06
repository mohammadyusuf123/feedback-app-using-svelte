<script>
    import FeedbackItems from "./feedbackItems.svelte";
    import {FeedbackStore} from '../store.js'
  import { fade, scale } from 'svelte/transition'
</script>

{#each $FeedbackStore as feedback (feedback.id) }
 <div in:scale out:fade="{{ duration: 500 }}">
  <FeedbackItems item={feedback}  />
 </div>
{/each}