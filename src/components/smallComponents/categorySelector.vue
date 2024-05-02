<template>
  <div class="mb-4">
    <ul class="flex flex-wrap justify-center -mb-px text-sm font-medium text-center pb-5" id="default-styled-tab"
      data-tabs-toggle="#default-styled-tab-content"
      data-tabs-active-classes="text-softPink hover:text-softPink dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
      data-tabs-inactive-classes="dark:border-transparent text-softPink hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
      role="tablist">
      <li class="me-2" role="presentation">
        <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-softPink hover:border-softPink" id="profile-styled-tab"
          data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile"
          aria-selected="false">Clothes</button>
      </li>
      <li class="me-2" role="presentation">
        <button
          class="inline-block p-4 border-b-2 rounded-t-lg hover:text-softPink hover:border-softPink dark:hover:text-gray-300"
          id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab"
          aria-controls="dashboard" aria-selected="false">Electronics</button>
      </li>
      <li class="me-2" role="presentation">
        <button
          class="inline-block p-4 border-b-2 rounded-t-lg hover:text-softPink hover:border-softPink dark:hover:text-softPink"
          id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings"
          aria-selected="false">Furniture</button>
      </li>
      <li role="presentation">
        <button
          class="inline-block p-4 border-b-2 rounded-t-lg hover:text-softPink hover:border-softPink dark:hover:text-gray-300"
          id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab" aria-controls="contacts"
          aria-selected="false">Shoes</button>
      </li>
    </ul>
  </div>
</template>