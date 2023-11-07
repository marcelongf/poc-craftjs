import { useNode } from '@craftjs/core';
import { FormControl, FormLabel, TextField } from '@material-ui/core';
import { Accordion as Teste } from 'autocommerce-design-system';
import React from 'react';

export const Accordion = (props) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <Teste title="Teste" description="teste" {...props}></Teste>
    </div>
  );
};

export const AccordionSettings = () => {
  const {
    actions: { setProp },
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Title</FormLabel>
        <TextField
          onChange={(e) => setProp((props) => (props.title = e.target.value))}
        />
      </FormControl>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Description</FormLabel>
        <TextField
          onChange={(e) =>
            setProp((props) => (props.description = e.target.value))
          }
        />
      </FormControl>
    </div>
  );
};

export const AccordionDefaultProps = {
  title: 'Teste',
  description: 'Descricao',
};

Accordion.craft = {
  props: AccordionDefaultProps,
  related: {
    settings: AccordionSettings,
  },
};
