import React from 'react';
import "./setupTests"
import { mount } from "enzyme";
import ProviderList from './ProviderList';


describe("ProviderList", () => {
    let props;
    let mountedProviderList;
    const providerList = () => {
        if (!mountedProviderList) {
            mountedProviderList = mount(
                <ProviderList {...props} />
            );
        }
        return mountedProviderList;
    };

    beforeEach(() => {
        props = {
            providers: []
        };
        mountedProviderList = undefined;
    });


    it("always renders a div of class ProviderList", () => {
        const divs = providerList().find("div.ProviderList");
        expect(divs.length).toEqual(1);
    });

    describe("should display an item for each provider", () => {
        beforeEach(() => {
            props = {
                providers: [
                    {
                        "last_name": "Witting",
                        "first_name": "Mike",
                        "email_address": "mwitting@updox.com",
                        "specialty": "Pediatrics",
                        "practice_name": "Witting’s Well Kids Pediatrics"
                    },
                    {
                        "last_name": "Juday",
                        "first_name": "Tobin",
                        "email_address": "tjuday@updox.com",
                        "specialty": "General Medicine",
                        "practice_name": "Juday Family Practice"
                    }
                ]
            };
        });

        it("should display an item for each provider", () => {
            const providerL = providerList();
            let providerDivs = providerL.find('div.provider');
            expect(providerDivs.length).toEqual(2);
        });

        it("each item should display last name, first name, specialty, email & practice name", () => {
            const providerL = providerList();
            let providerDivs = providerL.find('div.provider');
            expect(providerDivs.at(0).text()).toMatch(/Witting/);
            expect(providerDivs.at(0).text()).toMatch(/Mike/);
            expect(providerDivs.at(0).text()).toMatch(/Pediatrics/);
            expect(providerDivs.at(0).text()).toMatch(/mwitting@updox.com/);
            expect(providerDivs.at(0).text()).toMatch(/Witting’s Well Kids Pediatrics/);
        })
    });

});
