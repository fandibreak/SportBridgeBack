const pool = require('../models/cnxSql')

const getAllProduct = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`select p.*,f.*
        from products as P 
        join fabricante as F 
        on
        P.CODE_FAB=F.id_FAb;`)
        result = data.rows
        console.log(result)
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();

    }
    return result
}

const getProductByFab = async (id) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`select p.*,f.*
                                                from products as P 
                                                join fabricante as F 
                                                on
                                                P.CODE_FAB=F.id_FAb
                                                where CODE_FAB= $1 
                                                order by 1;`
            , [id])
        result = data.rows
        console.log(result)
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


const getProductByName = async (name) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`select  p.*,f.*
                                                from products as P 
                                                join fabricante as F 
                                                on
                                                P.CODE_FAB=F.id_FAb
                                                where nombre ilike $1
                                                order by 1;`
            , [`%${name}%`])
        result = data.rows
        console.log(result)
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}



const getProductByType = async (a, b) => {


    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(`select p.*,f.*
                                                from products as P 
                                                join fabricante as F 
                                                on
                                                P.CODE_FAB=F.id_FAb
                                                where CODE_FAB = $1 
                                                and categoria = $2
                                                order by 1;`
            , [a, b])
        console.log(a, b)


        result = data.rows
        console.log(result)
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//getAllProduct ()

//getProductByName('nike')

//getProductByType(1,'run')

const getproduct = {
    getAllProduct,
    getProductByFab,
    getProductByType,
    getProductByName

}


module.exports = getproduct;