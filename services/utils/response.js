//plantilla para estandarizar las respuestas del servidor
export const response = (process, message, data = []) => {
    return {
        process,
        message,
        data
    }
}