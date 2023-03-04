import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/user.routes'
import rolRoutes from './routes/rol.routes'
import asignaturasRoutes from './routes/asignaturas.routes'
import CompetenciasRoutes from './routes/competencias.routes'
import gradoRoutes from './routes/grado.routes'
import ieRoutes from './routes/institucion_educativa.routes'

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(userRoutes, rolRoutes, asignaturasRoutes, CompetenciasRoutes, gradoRoutes, ieRoutes)
export default app;