import TextField from "@mui/material/TextField";
function InputField({ names, types, autoComplete, id, lable }) {
  return (
    <div className="flex flex-row space-x-3 ">
      <TextField
        label={lable}
        color="secondary"
        autoComplete={autoComplete}
        id={id}
        type={types}
      />
    </div>
  );
}
export default InputField;
