<template>
  <div class="mt-8 flex">
    <i class="flex place-items-center place-content-center w-[32px] h-[32px] text-textcolor">
      <slot name="icon"></slot>
    </i>
    <div class="flex-1 ml-2">
      <h3 class="text-xl font-medium mb-[0.4rem] text-heading">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

