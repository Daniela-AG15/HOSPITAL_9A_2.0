<template>
	<form>
	  <div class="py-16">
		<div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
		  <!-- Columna de la imagen -->
		  <div class="w-full lg:w-5/12 bg-cover rounded-l-lg" style="background-image: url(https://i.pinimg.com/550x/f9/13/05/f9130503f61225d775facb9047d7ca92.jpg)">
			<!-- Aquí puedes ajustar el ancho de la columna de la imagen -->
		  </div>
		  <!-- Columna del formulario -->
		  <div class="p-8 w-full lg:w-7/12">
			<!-- Contenido del formulario -->
			<div class="mb-4">
			  <PersonaView></PersonaView>
			</div>
			<div class="mb-4">
			  <UsuarioView></UsuarioView>
			</div>
		  </div>
		</div>
	  </div>
	</form>
  </template>
  
  <script>
  import PersonaView from './personas.vue';
  import UsuarioView from './usuarios.vue';
  
  export default {
	components: {
	  PersonaView,
	  UsuarioView
	}
  }
  </script>
  
  <style scoped>
  body {
	background-color: #f7fafc;
	font-family: 'Inter', sans-serif;
  }
  
  @media (prefers-color-scheme: dark) {
	body {
	  background-color: #1a202c;
	}
  }
  
  /* Puedes agregar estilos adicionales aquí */
  </style>
  