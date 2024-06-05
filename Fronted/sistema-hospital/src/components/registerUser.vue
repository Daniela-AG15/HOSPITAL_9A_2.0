<template>
	<div class="py-16">
	  <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
		<!-- Col -->
		<div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
			 style="background-image: url(https://i.pinimg.com/550x/f9/13/05/f9130503f61225d775facb9047d7ca92.jpg)"></div>
		<!-- Col -->
		<div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-8 lg:rounded-l-none">
		  <h3 class="py-4 text-3xl font-semibold text-center text-gray-800 dark:text-white">PRIVILAGE CARE HOSPITAL</h3>
		  <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			  <div>
				<label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="nombre">
				  Nombre
				</label>
				<input
				  class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
				  id="firstName"
				  type="text"
				  placeholder="Nombre"
				/>
			  </div>
			  <div>
				<label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="primerApellido">
				  Primer Apellido
				</label>
				<input
				  class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
				  id="primerApellido"
				  type="text"
				  placeholder="Primer Apellido"
				/>
			  </div>
			  <div>
				<label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="segundoApellido">
				  Segundo Apellido
				</label>
				<input
				  class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
				  id="segundoApellido"
				  type="text"
				  placeholder="Segundo Apellido"
				/>
			  </div>
			  <div>
				<label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="CURP">
				  CURP
				</label>
				<input
				  class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
				  id="CURP"
				  type="text"
				  placeholder="CURP"
				/>
			  </div>
			  <div>
				<label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="genero">
				  Género
				</label>
				<select id="genero"
						class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600">
				  <option selected>Género</option>
				  <option value="H">Hombre</option>
				  <option value="M">Mujer</option>
				  <option value="O">Otro</option>
				</select>
			  </div>
			  <div>
				<label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="sangre">
				  Tipo de Sangre
				</label>
				<select id="sangre"
						class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600">
				  <option selected>Tipo</option>
				  <option value="A1">A+</option>
				  <option value="A2">A-</option>
				  <option value="B1">B+</option>
				  <option value="B2">B-</option>
				  <option value="AB1">AB+</option>
				  <option value="AB2">AB-</option>
				  <option value="O1">O+</option>
				  <option value="O2">O-</option>
				</select>
			  </div>
			  <div>
				<label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="fechaNacimiento">
				  Fecha de Nacimiento
				</label>
				<input
				  class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
				  id="fechaNacimiento"
				  type="date"
				  required
				/>
			  </div>
			  <div>
				<label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="telefono">
				  Teléfono
				</label>
				<input
				  class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
				  id="telefono"
				  type="tel"
				  placeholder="Teléfono"
				/>
			  </div>
			  <div>
				<label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="email">
				  Email
				</label>
				<input
				  class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
				  id="email"
				  type="email"
				  placeholder="Email"
				/>
			  </div>
			  <div>
				<label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="usuario">
				  Usuario
				</label>
				<input
				  class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
				  id="usuario"
				  type="text"
				  placeholder="Usuario"
				/>
			  </div>
			  <div>
				<label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="password">
				  Contraseña
				</label>
				<input
				  class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
				  id="password"
				  type="password"
				  placeholder="******"
				/>
			  </div>
			  <div>
				<label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="repetirPassword">
				  Confirmar Contraseña
				</label>
				<input
				  class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
				  id="repetirPassword"
				  type="password"
				  placeholder="******"
				/>
			  </div>
			</div>
			<div class="mt-6 text-center">
			  <button
				class="bg-indigo-600 text-white font-semibold py-2 px-4 w-full rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 "
				type="button"
			  >
				Registrar Cuenta
			  </button>
			</div>
			<hr class="my-6 border-t" />
			<div class="text-center">
			  <a class="inline-block text-sm text-indigo-500 dark:text-indigo-400 align-baseline hover:text-indigo-800"
				 href="#">
				¿Olvidaste tu Contraseña?
			  </a>
			</div>
			<div class="text-center">
			  <RouterLink to="/">
				<a class="inline-block text-sm text-indigo-500 dark:text-indigo-400 align-baseline hover:text-indigo-800"
				   href="">
				  ¿Ya Tienes una Cuenta? ¡Inicia Sesión!
				</a>
			  </RouterLink>
			</div>
		  </form>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	name: 'RegisterForm',
  };
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
  </style>
  


