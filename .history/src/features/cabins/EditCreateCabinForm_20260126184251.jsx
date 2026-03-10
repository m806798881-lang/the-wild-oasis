import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import useEditCreateCabin from "./useEditCabin";
import useCreateCabin from "./useCreateCabin";

function EditCreateCabinForm({ toEditCabin = {}, close }) {
  const isEditSession = Boolean(toEditCabin.id);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? toEditCabin : {},
  });
  const { errors } = formState;
  const { editCabin, isEditing } = useEditCreateCabin();
  const { createCabin, isCreating } = useCreateCabin();
  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    isEditSession
      ? editCabin(
          {
            newCabin: { ...data, image: image },
            id: toEditCabin.id,
          },
          { onSuccess: () => reset() }
        )
      : createCabin({ ...data, image: image }, { onSuccess: () => reset() });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "this field is required." })}
          disabled={isCreating || isEditing}
        />
      </FormRow>
      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "this field is required.",
            min: { value: 1, message: "capacity should at least 1." },
          })}
          disabled={isCreating || isEditing}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "this field is required.",
            min: { value: 1, message: "regular price should at least 1." },
          })}
          disabled={isCreating || isEditing}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "this field is required.",
            // 还是要加number的
            validate: (value) =>
              Number(value) <= Number(getValues("regularPrice")) ||
              "discount should be less than regular price.",
          })}
          disabled={isCreating || isEditing}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "this field is required." })}
          disabled={isCreating || isEditing}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          disabled={isCreating || isEditing}
          {...register("image", {
            required: isEditSession ? false : "this field is required.",
          })}
        />
      </FormRow>

      {/* type is an HTML attribute! */}
      <FormRow>
        <Button variation="secondary" type="reset" disabled={isCreating}>
          Cancel
        </Button>
        <Button disabled={isCreating}>
          {isEditSession ? "Edit cabin" : "Add cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default EditCreateCabinForm;

// (value) => {

//   const isValid = value <= getValues("regularPrice");
//   console.log("是否有效:", isValid);
//   return isValid || "discount should be less than regular price.";
// },
