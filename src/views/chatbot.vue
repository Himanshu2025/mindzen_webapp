<template>
  <h1>Deep Chat</h1>

  <deep-chat
    directConnection='{
    "openAI": {
      "key": "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",
      "chat": {"max_tokens": 2000, "system_prompt": "Assist me with anything you can"}
    }
  }'
    style="border-radius: 8px"
  ></deep-chat>
</template>

<script>
import { DeepChat } from 'deep-chat'
</script>

<style>
div {
  font-family: sans-serif;
  text-align: center;
  justify-content: center;
  display: grid;
}
</style>
