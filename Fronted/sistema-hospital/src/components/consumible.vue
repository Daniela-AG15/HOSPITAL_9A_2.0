<template>
    <form>
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
                id="nombre"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="descripcion">
                Descripción
              </label>
              <input
                class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
                id="descripcion"
                type="text"
                placeholder="Descripción"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="tipo">
                Tipo
              </label>
              <input
                class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
                id="tipo"
                type="text"
                placeholder="Tipo"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="departamento">
                Departamento
              </label>
              <input
                class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
                id="departamento"
                type="text"
                placeholder="Departamento"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="cantidad_existencia">
                Cantidad en Existencia
              </label>
              <input
                class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
                id="cantidad_existencia"
                type="number"
                placeholder="Cantidad en Existencia"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="detalle">
                Detalle
              </label>
              <textarea
                class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
                id="detalle"
                rows="3"
                placeholder="Detalle"
              ></textarea>
            </div>
            <div>
              <label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="fecha_registro">
                Fecha de Registro
              </label>
              <input
                class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
                id="fecha_registro"
                type="date"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="estatus">
                Estatus
              </label>
              <input
                class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
                id="estatus"
                type="text"
                placeholder="Estatus"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="observaciones">
                Observaciones
              </label>
              <textarea
                class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
                id="observaciones"
                rows="3"
                placeholder="Observaciones"
              ></textarea>
            </div>
            <div>
              <label class="block mb-2 text-sm font-semibold text-gray-700 dark:text-white" for="espacio_medico">
                Espacio Médico
              </label>
              <input
                class="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white dark:bg-gray-700 dark:border-gray-600"
                id="espacio_medico"
                type="text"
                placeholder="Espacio Médico"
              />
            </div>
          </div>
          <div class="mt-6 text-center">
            <button
              class="bg-indigo-600 text-white font-semibold py-2 px-4 w-full rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 "
              type="button"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </form>
  </template>
  