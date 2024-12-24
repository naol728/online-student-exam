import TextField from "@mui/material/TextField";
function InputField({
  names,
  types,
  autoComplete,
  id,
  lable,
  value,
  handlChange,
}) {
  console.log("some componets change when", handlChange);
  return (
    <div className="flex flex-row space-x-3 m-5">
      <TextField
        label={lable}
        color="secondary"
        autoComplete={autoComplete}
        className="w-80"
        id={id}
        type={types}
        value={value}
        onChange={(e) => handlChange(e.target.value)}
      />
    </div>
  );
}
export default InputField;
