require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5c95c5b5db4a970688da3a29').then(() => {
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    console.log('Working!')
    const task = await Task.findByIdAndDelete({ id })
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('55c9594af3af8a9023ea9d235').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e, 'Not reached')
})