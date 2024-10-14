import service_data from "./dummy_data/services.json";
import Grid from "@mui/joy/Grid";

import { Service } from "@/types/types";
import ServiceComponent from "./components/ServiceComponent";

function App() {
  // const [count, setCount] = useState(0)
  const services: Service[] = service_data;

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Service List
      </h1>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        { services.map((item, index) => 
          (
            <Grid key={`service-${index}-${item.id}`}>
              <ServiceComponent service={item} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
}

export default App;
