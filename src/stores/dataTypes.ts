export type PassionType = 'Músico' | 'Estudiante' | 'Talent Hunter';

export type ClientType = 'Persona natural' | 'Empresa o instituciόn';

export type EnterpriseUserType =
    'Empresa privada (corporativa)'
    | 'Institución pública'
    | 'Institución educativa o cultural'
    | 'Agencia de eventos'
    | 'Fundaciones y ONG\'S'
    | 'Restaurante, hotel  o espacio de hospitabilidad'
    | 'Otro';

export type NaturalUserType =
    'Padre/madre buscando educaciόn musical para sus hijos'
    | 'Persona interesada en aprender  música o desarrollar habilidades artísticas'
    | 'Músico en búsqueda de formaciόn avanzada'
    | 'Organizador/a de un evento privado (como bodas o reuniones)'
    | 'Artista o creativo/a buscando colaboraciones'
    | 'Otro';

export enum ChallengeNaturalOptions {
    HabilidadesMusicales = 'Necesidad de mejorar habilidades musicales o técnicas específicas, ya sea para mí o para un tercero',
    ExperienciasMusicales = 'Falta de experiencias musicales personalizadas para eventos o espacios.',
    AlternativasPersonalizadas = 'Escasez de alternativas personalizadas que ayuden a mejorar la concentración, el ánimo y el bienestar emocional con música.',
    ActividadesCulturales = 'Escasez de actividades culturales o educativas para comunidades u organizaciones.'
}

export enum ChallengeEnterpriseOptions {
    FaltaExperiencias = 'Falta de experiencias musicales personalizadas para eventos o espacios.',
    BienestarEmocional = 'Ausencia de herramientas para el bienestar emocional de empleados o clientes (musicoterapia, talleres).',
    IdentidadMarca = 'Necesidad de reforzar identidad de marca con contenido musical único.',
    ActividadesCulturales = 'Escasez de actividades culturales o educativas para colaboradores o comunidades.'
}