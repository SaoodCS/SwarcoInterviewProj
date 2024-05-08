import DataTable from "./dataTable/DataTable";
import Form from "./form/Form";
import { Section } from "./form/components/section/Section";
import { Wrapper } from "./form/components/wrapper/Wrapper";

export default function App() {
  return (
    <Wrapper>
      <Section>
        <Form />
      </Section>
      <Section>
        <DataTable />
      </Section>
    </Wrapper>
  );
}
