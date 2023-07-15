import { Button, TextField } from "@mui/material";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div
      style={{
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "40px",
        borderRadius: "10px",
        backgroundColor: "rgb(165, 108, 108)",
      }}
    >
      <div style={{ paddingTop: "20px" }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "30px" }}>
            <TextField
              label="Nombre y Apellido"
              variant="outlined"
              name="name"
              onChange={handleChange}
              helperText={errors.name}
              error={errors.name ? true : false}
              style={{ backgroundColor: "grey", width: "300px" }}
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <TextField
              label="E-mail"
              variant="outlined"
              name="email"
              onChange={handleChange}
              helperText={errors.email}
              error={errors.email ? true : false}
              style={{ backgroundColor: "grey", width: "300px" }}
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <TextField
              label="Teléfono"
              variant="outlined"
              name="phone"
              onChange={handleChange}
              helperText={errors.phone}
              error={errors.phone ? true : false}
              style={{ backgroundColor: "grey", width: "300px" }}
            />
          </div>
          <Button variant="contained" type="submit" style={{ width: "300px" }}>
            Comprar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
