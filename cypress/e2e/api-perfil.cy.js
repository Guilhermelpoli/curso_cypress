describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0YWJmZTQyNC1mYmFjLTRmNzMtOGVkZS1hMzA4M2FiZjBhYjciLCJhZG9wdGVyTmFtZSI6IkNhcmxvcyBBbGJlcnRvIiwiaWF0IjoxNzYxMTcyNDc1LCJleHAiOjE3NjE0MzE2NzV9.Me4z3gN6VRztZ4w-1o7JMijms2Wghm2xtcaN40lEXXE`

        it('Nome do perfil', () => {
            cy.request({
                method: 'GET',
                url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/4abfe424-fbac-4f73-8ede-a3083abf0ab7',
                headers: { authorization }
            }).then((res)  => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body).to.have.property('perfil')
                expect(res.body.perfil.nome).to.be.equal('Carlos Alberto')
            })
            
        });
    
});