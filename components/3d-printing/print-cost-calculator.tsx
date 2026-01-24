"use client";

import React, { useState, type FormEvent } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FILAMENT_PRICE_PER_KG = 31000; // KRW
const MATERIAL_EFFICIENCY_FACTOR = 1.1; // percent - Accounts for filament waste
const PRINT_TIME_COST_PER_HOUR = 300; // KRW

const PrintCostCalculator = () => {
  const [printingTime, setPrintingTime] = useState<string>("");
  const [filamentWeight, setFilamentWeight] = useState<string>("");
  const [nozzleSize, setNozzleSize] = useState<string>("0.2");
  const [result, setResult] = useState<number | null>(null);
  const [timeError, setTimeError] = useState<string>("");
  const [weightError, setWeightError] = useState<string>("");
  const [nozzleError, setNozzleError] = useState<string>("");

  const validateInputs = () => {
    let isValid = true;
    setTimeError("");
    setWeightError("");
    setNozzleError("");
    const time = parseFloat(printingTime);
    const weight = parseFloat(filamentWeight);

    // Validate printing time input
    if (printingTime.trim() === "" || isNaN(time)) {
      setTimeError("Please enter a valid printing time (in hours).");
      isValid = false;
    }

    // Validate filament weight input
    if (filamentWeight.trim() === "" || isNaN(weight)) {
      setWeightError("Please enter a valid filament weight (in grams).");
      isValid = false;
    }

    // Validate nozzle size - must be 0.4
    if (nozzleSize !== "0.4") {
      setNozzleError("Only 0.4mm nozzle size is currently supported.");
      isValid = false;
    }

    return isValid;
  };

  const computeProduct = () => {
    const time = parseFloat(printingTime);
    const weight = parseFloat(filamentWeight);

    const unitCost =
      (weight / 1000) * FILAMENT_PRICE_PER_KG * MATERIAL_EFFICIENCY_FACTOR;
    const addedMachineCost = time * PRINT_TIME_COST_PER_HOUR;
    const totalCost = unitCost + addedMachineCost;
    const points = Math.round(totalCost / 10 / 2);

    setResult(points);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateInputs()) {
      computeProduct();
    } else {
      setResult(null);
    }
  };

  return (
    <Card className="h-full w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          3D Printing Cost Calculator
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Enter the printing time (in hours) and filament weight (in grams)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Always reserve space for the result */}
        <div className="min-h-[3.5rem]">
          {result !== null && (
            <div className="text-lg font-medium">
              This 3D model costs <strong className="text-primary">{result} points</strong>.
            </div>
          )}
          {nozzleError && (
            <Alert className="border-destructive/50 bg-destructive/10">
              <AlertDescription className="flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" /> {nozzleError}
              </AlertDescription>
            </Alert>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label
              htmlFor="nozzleSize"
              className="block text-sm font-medium mb-2"
            >
              Nozzle Size (mm)
            </label>
            <Select value={nozzleSize} onValueChange={setNozzleSize}>
              <SelectTrigger id="nozzleSize" className="bg-background">
                <SelectValue placeholder="Select nozzle size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0.2">0.2</SelectItem>
                <SelectItem value="0.4">0.4</SelectItem>
                <SelectItem value="0.6">0.6</SelectItem>
                <SelectItem value="0.8">0.8</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label
              htmlFor="printingTime"
              className="block text-sm font-medium mb-2"
            >
              Printing Time (hours)
            </label>
            <Input
              id="printingTime"
              type="number"
              step="0.01"
              value={printingTime}
              onChange={(e) => setPrintingTime(e.target.value)}
              placeholder="e.g. 1.2"
              className="bg-background"
            />
            {timeError && (
              <Alert className="mt-2 border-destructive/50 bg-destructive/10">
                <AlertDescription className="flex items-center gap-2 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4" /> {timeError}
                </AlertDescription>
              </Alert>
            )}
          </div>
          <div>
            <label
              htmlFor="filamentWeight"
              className="block text-sm font-medium mb-2"
            >
              Filament Weight (grams)
            </label>
            <Input
              id="filamentWeight"
              type="number"
              step="0.01"
              value={filamentWeight}
              onChange={(e) => setFilamentWeight(e.target.value)}
              placeholder="e.g. 150"
              className="bg-background"
            />
            {weightError && (
              <Alert className="mt-2 border-destructive/50 bg-destructive/10">
                <AlertDescription className="flex items-center gap-2 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4" /> {weightError}
                </AlertDescription>
              </Alert>
            )}
          </div>
          <Button type="submit" className="w-full">
            Calculate
          </Button>
        </form>
      </CardContent>
      <CardFooter />
    </Card>
  );
};

export default PrintCostCalculator;
