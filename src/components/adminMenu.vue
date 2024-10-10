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
            <router-link to="/adminDashboard">Dashboard</router-link>
          </MenubarItem>
          <MenubarItem>
            <router-link to="/sendEmail">Send E-mail</router-link>
          </MenubarItem>
          <MenubarItem>
            <router-link to="/Firelogin">signin</router-link>
          </MenubarItem>
          <MenubarItem>
            <router-link to="/Fireregister">Register</router-link>
          </MenubarItem>
          <MenubarItem>
            <router-link to="/Tabledata01">User mental health data </router-link>
          </MenubarItem>
          <MenubarItem>
            <router-link to="/Tabledata02">Behavioral data</router-link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
</template>
