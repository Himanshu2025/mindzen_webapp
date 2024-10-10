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
            <router-link to="/userdashboard">Dashboard</router-link>
          </MenubarItem>
          <MenubarItem>
            <router-link to="/Firelogin">signin</router-link>
          </MenubarItem>
          <MenubarItem>
            <router-link to="/Fireregister">Register</router-link>
          </MenubarItem>
          <MenubarItem>
            <router-link to="/addpost">Add post</router-link>
          </MenubarItem>
          <MenubarItem>
            <router-link to="/viewpost">View posts</router-link>
          </MenubarItem>
          <MenubarItem>
            <router-link to="/map">Find us</router-link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
</template>
