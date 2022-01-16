class Estudiante{
    constructor(nombre, apellido, email){
        this.nombre=nombre;
        this.apellido = apellido;
        this.email = email;
        this.materias = [];
    }

    get nombre(){
        return this.nombre;
    }

    set nombre(nombre){
        return this.nombre = nombre;
    }

    get apellido(){
        return this.apellido;
    }

    set apellido(apellido){
        return this.apellido = apellido;
    }

    getmail(){
        return this.email;
    }

    set email(email){
        return this.email = email;
    }
    
    matricularMaterias(codigoMateria, nombreMateria){
        let objMateria = new Materia(codigoMateria,nombreMateria);
        this.materias.push(objMateria);
    }   

    mostrarMaterias(){
        this.materias.forEach(element => {
            console.log(element.nombreMateria + " - " + element.codigoMateria)
        });
    }

    get materia(codigoMateria){
        let objMateria = this.materias.filter(m => (m.codigoMateria == codigoMateria));
        return objMateria;
    }
} 

module.export = Estudiante;