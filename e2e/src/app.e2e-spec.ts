import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Bem-vindo');
  });

  it('Test Button (Linhas de Produção) ', () => {
    page.navigateTo();
    expect(page.getButtonName("//button[2]")).toEqual('Linhas de Produção');
  });

  it('Test Button (Maquinas)  ', () => {
    page.navigateTo();
    expect(page.getButtonName("//button[3]")).toEqual('Maquinas');
  });

  it('Test Button (Operações)  ', () => {
    page.navigateTo();
    expect(page.getButtonName("//button[4]")).toEqual('Operações');
  });

  it('Test Button (Produtos)  ', () => {
    page.navigateTo();
    expect(page.getButtonName("//button[5]")).toEqual('Produtos');
  });

  it('Test Url Main Page', () => {
    page.navigateTo();
    expect(page.getUrlPage()).toEqual('http://localhost:4200/home');
  });

  it('Test Url (Linhas de Produção) Page', () => {
    page.navigateTo();
    page.clickButton("//button[2]");
    expect(page.getUrlPage()).toEqual('http://localhost:4200/linhas-producao');
  });

  it('Test Labels (Linhas de Produção) Page', () => {
    page.navigateTo();
    expect(page.getLabelName("//button[2]","//h2")).toEqual('As minhas Linhas de Produção:');
  });

  it('Test Criação (Linhas de Produção) Page', () => {
    page.navigateTo();
    expect(page.getLabelName("//button[2]","//h2")).toEqual('As minhas Linhas de Produção:');
    expect(page.getLabelName("//div/button","//input[@name='name']")).toEqual('');
  });

   it('Test Url (Maquinas) Page', () => {
    page.navigateTo();
    page.clickButton("//button[3]");
    expect(page.getUrlPage()).toEqual('http://localhost:4200/maquinas');
  });

  it('Test Labels (Maquinas) Page', () => {
    page.navigateTo();
    expect(page.getLabelName("//button[3]","//h2")).toEqual('As minhas Máquinas:');
  });

  it('Test Labels (Maquinas2) Page', () => {
    page.navigateTo();
    expect(page.getLabelName("//button[3]","//div[2]/h2")).toEqual('Os meus Tipos de Máquina:');
  });

  it('Test Url (Operacoes) Page', () => {
    page.navigateTo();
    page.clickButton("//button[4]");
    expect(page.getUrlPage()).toEqual('http://localhost:4200/operacoes');
  });

  it('Test Labels (Operacoes) Page', () => {
    page.navigateTo();
    expect(page.getLabelName("//button[4]","//h2")).toEqual('As minhas Operações:');
  });

  it('Test Url (Produtos) Page', () => {
    page.navigateTo();
    page.clickButton("//button[5]");
    expect(page.getUrlPage()).toEqual('http://localhost:4200/produtos');
  });

  it('Test Labels (Produtos) Page', () => {
    page.navigateTo();
    expect(page.getLabelName("//button[5]","//h2")).toEqual('Os meus Produtos:');
  });

  it('Test Labels (Produtos) Page', () => {
    page.navigateTo();
    expect(page.getLabelName("//button[5]","//div[2]/h2")).toEqual('Os meus Planos de Fabrico:');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    /* expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry)); */
  });
});
