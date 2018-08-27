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
});

