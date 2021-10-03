const db = require('../../client/mysql')

function findOneById(id){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM utilisateur WHERE id = ?";
        db.query(query, id, function(err,result){
            console.log(result)
            console.log(err)
            if(result.length > 0){
                resolve(result[0])
            }else if(result.length ==0){
                reject(new Error('No record found'))
            }
            else{
                reject(err)
            }
        })
    })
}

function findIfEmailExists(email){
    return new Promise(function(resolve, reject)  {
        var query = "SELECT * FROM utilisateur WHERE email = ?"
        db.query(query, email, function(error, results, fields){
            if(results != null && results.length > 0){
                reject(new Error("L'email existe déjà"))
            }
            if(error){
                reject(error)
            }
            resolve('ok')
            })
        })
}

async function findUserByEmail(email){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM utilisateur WHERE email = ?";
        db.query(query, email, function(err,result){
            console.log(result)
            if(result.length > 0){
                resolve(result[0])
            }else if(err){
                reject(err)
            }
            else{
                reject(new Error("L'email n'existe pas"))
            }
        })
    })
}

function createUserWithRole(user){
    return new Promise(function(resolve,reject){
        var query = `INSERT INTO utilisateur (nom, prenom, email, password, role) VALUES ("${user.nom}","${user.prenom}","${user.email}","${user.password}","${user.role}")`;
        db.query(query, function(err,result){
            console.log(err)
            console.log(result.insertId)
            if(err) reject(err)
            resolve(result.insertId) 
        })
    })
}

function createUser(nom, prenom, email, dateNaissance, encryptedPassword, adresse, codePostal, ville){
    return new Promise(function(resolve, reject) {
        var query = `INSERT INTO utilisateur (nom, prenom, email, dateNaissance, password, adresse, codePostal, ville) VALUES ("${nom}","${prenom}","${email}", "${dateNaissance}","${encryptedPassword}","${adresse}","${codePostal}","${ville}")`
        db.query(query, function(err, result){
            console.log(err)
            console.log(result.insertId)
            if(err) reject(err)
            resolve(result.insertId)  
        })
    })
}

function getAllUsers(){
    return new Promise(function(resolve,reject){
        var query = "SELECT * FROM utilisateur";
        db.query(query, function(err,result){
            if(result.length > 0){
                resolve(result)
            }else if(result.length ==0){
                resolve([])
            }else{
                reject(err)
            }
        })
    })
}

function updateUser(userToUpdate, id){
    return new Promise(function(resolve, reject){
        var query = `UPDATE utilisateur SET ? WHERE id = ?`
        db.query(query, [userToUpdate, id], function(err, result){
            console.log(err)
            console.log(result)
            if(err) reject(err)
            if(result.affectedRows >0) resolve('ok')
            else reject(new Error('Update failed'))
        })
    })
}

function getUsersByRole(role){
    return new Promise(function(resolve,reject){
        var query = `SELECT * FROM utilisateur WHERE role = "${role}"`;
        db.query(query, function(err,result){
            console.log(result)
            console.log(err)
            if(result.length > 0){
                resolve(result)
            }else if(result.length ==0){
                resolve([])
            }
            else{
                reject(err)
            }
        })
    })
}

function deleteUser(id){
    return new Promise(function(resolve, reject) {
        var query = `DELETE FROM utilisateur WHERE id = ${id}`
        db.query(query, function(err, result){
            if(err) reject(err)
            if(result.affectedRows == 1)resolve('deleted')
        })
    })
}

module.exports = {
    findOneById,
    findIfEmailExists,
    findUserByEmail,
    createUser,
    getAllUsers,
    updateUser,
    createUserWithRole,
    getUsersByRole,
    deleteUser
}