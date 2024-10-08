<script setup lang="ts">
import { ref } from 'vue'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger
} from '@/components/ui/menubar'
</script>

<template>
  <div>
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Menu</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <router-link to="/userdaashboard">Dashboard</router-link>
          </MenubarItem>
          <MenubarItem>
            <router-link to="/Firelogin">signin</router-link>
          </MenubarItem>
          <MenubarItem>
            <router-link to="/Fireregister">Register</router-link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
</template>
