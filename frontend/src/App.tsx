import DataContextProvider from "./context/dataProvider/DataContextProvider";
import DataTable from "./dataTable/DataTable";
import Form from "./form/Form";
import { Section } from "./form/components/section/Section";
import { Wrapper } from "./form/components/wrapper/Wrapper";

export default function App() {
  return (
    <DataContextProvider>
      <Wrapper>
        <Section>
          <Form />
        </Section>
        <Section>
          <DataTable />
        </Section>
      </Wrapper>
    </DataContextProvider>
  );
}
