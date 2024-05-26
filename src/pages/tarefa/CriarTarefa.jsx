import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React, {useState, useEffect} from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';


const CriarTarefa = ({handleClose, tarefas, setTarefas}) =>{
  const [task, setTask] = useState({
    idTarefa: 0,
    tituloTarefa: '',
    descricaoTarefa: '',
    inicioTarefa: '',
    fimTarefa: '',
    recursoTarefa:'',
    statusTarefa: ''
  })


  console.log(task)

  useEffect(() => {

    console.log(task)

    let proximoId = Math.max(...tarefas.map(tarefa => tarefa.idTarefa)) + 1;
    setTask({
      ...task,
      idTarefa: proximoId
    })
    
  },[]);

  const handleRecurso = (event) => {
    setTask({
      ...task,
      recursoTarefa: event.target.value
    })
    
  };

  const handleStatus = (event) => {
    setTask({
      ...task,
      statusTarefa: event.target.value
    })
  };

  const handleSalvar = () => {
    //Para inspecionarmos nosso código, uma boa estratégia é utilizarmos o console.log.
    //  Com o console.log, podemos visualizar o seu conteúdo na aba Console, no inspecionador de elementos, na janela do navegador
    console.log(`id: ${task.idTarefa} \n titulo: ${task.tituloTarefa} \n descrição: ${task.descricaoTarefa} \n inicio: ${task.inicioTarefa} \n fim: ${task.fimTarefa} \n recurso: ${task.recursoTarefa} \n status: ${task.statusTarefa}`);

    setTarefas(
      [...tarefas, 
        {
         ...task
        }
      ]);
    //console.log(`Tarefas: ` + JSON.stringify(tarefas));
    handleClose();
  };

  return(
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader
          title="Tarefas"
          subheader="Cadastro de Tarefas"
        /> 
        <CardContent sx={{
          width: '95%',
          maxWidth: '100%',
        }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="tarefa_titulo" aria-describedby="tarefa_titulo_helper_text" value={task.tituloTarefa} onChange={e => { 
                
                setTask({
                  ...task,
                tituloTarefa: e.target.value
              })
               }} />
              <FormHelperText id="tarefa_titulo_helper_text">Título da Tarefa.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>  
            <FormControl fullWidth>
              <Input id="tarefa_descricao" aria-describedby="tarefa_descricao_helper_text" value={task.descricaoTarefa} onChange={e => { setTask({
                ...task,
                descricaoTarefa: e.target.value
                }) }} />
              <FormHelperText id="tarefa_descricao_helper_text">Descrição da Tarefa.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={3}>  
              <FormControl>
                <Input id="tarefa_inicio" type="date" aria-describedby="tarefa_inicio_helper_text" value={task.inicioTarefa} onChange={e => { setTask({
                  ...task,
                  inicioTarefa:e.target.value
                }) }}
                  sx={{
                    color:'rgba(0, 0, 0, 0.6)',
                    fontWeight: 400,
                    paddingLeft:'13px'
                  }} 
                />
                <FormHelperText id="tarefa_inicio_helper_text">Início da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>  
            <Grid item xs={3}>  
              <FormControl>
                <Input id="tarefa_fim" type="date" aria-describedby="tarefa_fim_helper_text" value={task.fimTarefa} onChange={e => { setTask({
                  ...task,
                  fimTarefa:e.target.value
                }) }}
                  sx={{
                    color:'rgba(0, 0, 0, 0.6)',
                    fontWeight: 400,
                    paddingLeft:'13px'
                  }} 
                />
                <FormHelperText id="tarefa_fim_helper_text">Fim da Tarefa.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>  
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_recurso">Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={task.recursoTarefa}
                  label="Recurso"
                  onChange={handleRecurso}
                  size="small"
                  sx={{
                    color:'rgba(0, 0, 0, 0.6)',
                    fontWeight: 400,
                  }} 
                >
                  <MenuItem value={'Recurso 1'}>Recurso 1</MenuItem>
                  <MenuItem value={'Recurso 2'}>Recurso 2</MenuItem>
                  <MenuItem value={'Recurso 3'}>Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>  
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_recurso">Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={task.statusTarefa}
                  label="Status"
                  onChange={handleStatus}
                  size="small"
                  sx={{
                    color:'rgba(0, 0, 0, 0.6)',
                    fontWeight: 400,
                  }} 
                >
                  <MenuItem value={'Aguardando'}>Aguardando</MenuItem>
                  <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
                  <MenuItem value={'Concluída'}>Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid container spacing={2} pl={2} mt={2}>
              <Grid item xs={1}>
                <Button size="small" variant="contained" onClick={handleSalvar}>Salvar</Button>
              </Grid>  
              <Grid item xs={1}>  
                <Button size="small" variant="outlined" onClick={handleClose}>Cancelar</Button>  
              </Grid>
            </Grid>  
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default CriarTarefa;