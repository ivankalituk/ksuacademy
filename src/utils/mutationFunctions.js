
// функция переработки данных из обычных, в опшны для реакт селекта 
export const dataToOptions = (data) => {
    return data.map((data) => ({
        value: data.course_id,
        label: data.course_name
    }))
}
