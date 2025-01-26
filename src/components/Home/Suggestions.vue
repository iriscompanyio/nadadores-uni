<script setup lang="ts">
import { Info, Mail, User } from "lucide-vue-next";
import { ErrorMessage, Field, Form, type FormState } from "vee-validate";
import { ref, watch } from "vue";

const preview = ref("");
const required = (value: unknown) => {
  if (!value) {
    return "Este campo es requerido";
  }
  return true;
};

const validEmail = (value: unknown) => {
  if (!value) {
    return "Este campo es requerido";
  }
  if (
    !String(value)
      .toLowerCase()
      .match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
  ) {
    return "Email inválido";
  }
  return true;
};

const handleFile = (e: Event) => {
  const files = (e.target as HTMLInputElement).files;
  if (files && files.length > 0) {
    preview.value = URL.createObjectURL(files[0]);
  }
};

const auth = () => btoa(`${import.meta.env.PUBLIC_AUTH_BASIC_USER}:${import.meta.env.PUBLIC_AUTH_BASIC_PASS}`);

const onSubmit = (
  values: Record<string, any>,
  {
    resetForm,
  }: { resetForm: (state?: Partial<FormState<Record<string, any>>>) => void },
) => {
  const formData = new FormData();
  formData.append("name", values.name);
  formData.append("email", values.email);
  formData.append("comment", values.comment);
  formData.append("accept", values.accept);
  formData.append("photo", values.file);

  fetch(`${import.meta.env.PUBLIC_API_URL}/services/email/notification`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth()}`,
    },
    body: formData,
  })
    .then((response) => {
      preview.value = "";
      resetForm();
      return response.json();
    })
    // eslint-disable-next-line no-console
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
};
</script>
<template>
  <div class="max-w-[90%] mx-auto mb-10 mt-32">
    <p class="text-[32px] md:text-[44px] font-bold text-[#0D0D0D] mb-10">
      Queremos seguir mejorando para ti
    </p>
    <div
      class="flex flex-col-reverse md:flex-row md:space-x-8 gap-y-8 md:gap-y-0"
    >
      <Form
        #default="{ values }"
        @submit="onSubmit"
        class="md:w-1/2 flex flex-col"
      >
        <div
          class="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full mb-6"
        >
          <div class="md:w-1/2">
            <p class="text-[#191825BF] font-medium text-[17px] mb-2">Nombre</p>
            <div class="relative">
              <Field
                type="text"
                name="name"
                :rules="required"
                class="w-full bg-[#E7F2FF] rounded-[8px] p-4 pl-12 outline-none"
              />
              <ErrorMessage name="name" class="text-red-500 text-sm" />
              <User class="w-6 h-6 absolute top-4 left-4 text-[#0B5EBF]" />
            </div>
          </div>
          <div class="md:w-1/2">
            <p class="text-[#191825BF] font-medium text-[17px] mb-2">E-mail</p>
            <div class="relative">
              <Field
                type="text"
                name="email"
                :rules="validEmail"
                class="w-full bg-[#E7F2FF] rounded-[8px] p-4 pl-12 outline-none"
              />
              <ErrorMessage name="email" class="text-red-500 text-sm" />
              <Mail class="w-6 h-6 absolute top-4 left-4 text-[#0B5EBF]" />
            </div>
          </div>
        </div>
        <div class="flex space-x-6">
          <div class="w-[70%]">
            <p class="text-[#191825BF] font-medium text-[17px] mb-2">
              Comentario
            </p>
            <Field
              type="text"
              as="textarea"
              rows="7"
              :rules="required"
              maxlength="1000"
              name="comment"
              class="w-full bg-[#E7F2FF] rounded-[8px] p-4 outline-none resize-none"
              placeholder="Déjanos tu comentario acerca de tu experiencia en Nadadores Uni"
            />
            <ErrorMessage name="comment" class="text-red-500 text-sm" />
          </div>
          <div class="flex flex-col w-[30%] min-w-[130px]">
            <p class="text-[#191825BF] font-medium text-[17px] mb-2">Foto</p>
            <div class="relative mb-4 h-full">
              <Field
                v-slot="{ handleChange, handleBlur }"
                :rules="required"
                name="file"
              >
                <label
                  for="file"
                  class="w-full h-[200px] bg-[#E7F2FF] rounded-[8px] outline-none flex items-center justify-center cursor-pointer"
                >
                  <img
                    v-if="!preview"
                    src="/photo-plus.svg"
                    alt=""
                    class="text-[#0b5ebf] h-[30px] w-[30px]"
                  />
                  <img
                    v-else
                    :src="preview"
                    alt=""
                    class="h-[200px] w-[200px] object-cover rounded-lg"
                  />
                  <input
                    id="file"
                    type="file"
                    @change="
                      (e: Event) => {
                        handleChange(e);
                        handleFile(e);
                      }
                    "
                    @blur="handleBlur"
                    class="hidden"
                  />
                </label>
              </Field>
              <ErrorMessage name="file" class="text-red-500 text-sm" />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-2">
            <Info class="w-5 h-5 text-[#999999]" />
            <span class="text-[#999999] font-medium text-[16px]"
              >Deja un comentario para poder enviar tu mensaje.</span
            >
          </div>
          <span class="text-[#4D4D4D] font-medium text-[14px]"
            >{{ values.comment?.length | 0 }}/1000</span
          >
        </div>
        <div class="flex space-x-4 items-center mt-6">
          <Field
            type="checkbox"
            name="accept"
            class="w-[26px] h-[26px]"
            :value="true"
          />
          <p class="text-[#4D4D4D] font-medium text-[14px]">
            Acepto recibir noticias e información sobre nuestros curso y
            eventos.
            <a href="#">
              <span class="text-[#0D0D0D] underline"
                >Leer acerca sobre nuestra política de tratamiento de
                datos</span
              >
            </a>
          </p>
        </div>
        <button
          class="w-full py-3 bg-[#0B5EBF] text-white font-bold rounded-[16px] mt-6"
        >
          Enviar
        </button>
      </Form>
      <div
        class="md:w-1/2 bg-[url('https://res.cloudinary.com/dkljgkuyy/image/upload/f_auto,q_auto/v1/nadadores/index/t0t8gi5f4gy9lpdbynwe')] rounded-[24px] aspect-[597/513] bg-cover bg-center bg-no-repeat"
      ></div>
    </div>
  </div>
</template>
