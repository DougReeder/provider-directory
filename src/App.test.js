import React from 'react';
import "./setupTests"
import {mount} from "enzyme";
import App from './App';
import ProviderList from "./ProviderList";


describe("App", () => {
    let props;
    let mountedApp;
    const constructApp = () => {
        if (!mountedApp) {
            mountedApp = mount(
                <App {...props} />
            );
        }
        return mountedApp;
    };

    beforeEach(() => {
        props = {};
        mountedApp = undefined;
    });

    it("on addProvider, adds provider to beginning of array", () => {
        const app = constructApp();
        expect(app.state().providers.length).toEqual(6);

        app.instance().addProvider({
            last_name: "Doe",
            first_name: "Jane",
            email_address: "jane@example.com",
            specialty: "Pediatric Gerontology",
            practice_name: "Leech & Quack"
        });

        expect(app.state().providers.length).toEqual(7);
        expect(app.state().providers[0].last_name).toEqual("Doe");
    });

    it("on removeProvider, removes selected providers from array", () => {
        const app = constructApp();
        expect(app.state().providers.length).toEqual(6);

        // if provider 1 is removed before 5, this test will fail
        app.instance().removeProvider(["1", "5"]);

        expect(app.state().providers.length).toEqual(4);
    });


    it("when sort by Last Name ascending is selected, sorts by Last Name ascending", () => {
        const app = constructApp();

        app.instance().changeSort('lastNameAsc');

        expect(app.state().providers[0].last_name).toEqual("Carlson");
        expect(app.state().providers[1].last_name).toEqual("Harris");
        expect(app.state().providers[2].last_name).toEqual("Juday");
        expect(app.state().providers[3].last_name).toEqual("Rose");
        expect(app.state().providers[4].last_name).toEqual("Wijoyo");
        expect(app.state().providers[5].last_name).toEqual("Witting");
    });
    it("when sort by Last Name descending is selected, sorts by Last Name descending", () => {
        const app = constructApp();

        app.instance().changeSort('lastNameDec');

        expect(app.state().providers[0].last_name).toEqual("Witting");
        expect(app.state().providers[1].last_name).toEqual("Wijoyo");
        expect(app.state().providers[2].last_name).toEqual("Rose");
        expect(app.state().providers[3].last_name).toEqual("Juday");
        expect(app.state().providers[4].last_name).toEqual("Harris");
        expect(app.state().providers[5].last_name).toEqual("Carlson");
    });

    it("when sort by First Name ascending is selected, sorts by First Name ascending", () => {
        const app = constructApp();

        app.instance().changeSort('firstNameAsc');

        expect(app.state().providers[0].first_name).toEqual("Bimo");
    });
    it("when sort by First Name descending is selected, sorts by First Name descending", () => {
        const app = constructApp();

        app.instance().changeSort('firstNameDec');

        expect(app.state().providers[0].first_name).toEqual("Tobin");
    });

    it("when sort by email ascending is selected, sorts by email ascending", () => {
        const app = constructApp();

        app.instance().changeSort('emailAsc');

        expect(app.state().providers[0].email_address).toEqual("bwijoyo@updox.com");
    });
    it("when sort by email descending is selected, sorts by email descending", () => {
        const app = constructApp();

        app.instance().changeSort('emailDec');

        expect(app.state().providers[0].email_address).toEqual("tjuday@updox.com");
    });

    it("when sort by specialty ascending is selected, sorts by specialty ascending", () => {
        const app = constructApp();

        app.instance().changeSort('specialtyAsc');

        expect(app.state().providers[0].specialty).toEqual("General Medicine");
    });
    it("when sort by specialty descending is selected, sorts by specialty descending", () => {
        const app = constructApp();

        app.instance().changeSort('specialtyDec');

        expect(app.state().providers[0].specialty).toEqual("Surgery");
    });

    it("when sort by Practice Name ascending is selected, sorts by Practice Name ascending", () => {
        const app = constructApp();

        app.instance().changeSort('practiceNameAsc');

        expect(app.state().providers[0].practice_name).toEqual("Carlson Orthopedics");
    });
    it("when sort by Practice Name descending is selected, sorts by Practice Name descending", () => {
        const app = constructApp();

        app.instance().changeSort('practiceNameDec');

        expect(app.state().providers[0].practice_name).toEqual("Witting’s Well Kids Pediatrics");
    });

});

